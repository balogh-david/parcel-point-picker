import pLimit from "p-limit";
import { requireEnv } from "@/lib/env";
import { getGraphqlClient } from "@/lib";
import { PickupPointsInAreaDocument } from "../graphql";
import type { Bbox, PickupPoint } from "../types";

const limit = pLimit(30);

export async function fetchPickupPoints(bbox: Bbox): Promise<PickupPoint[]> {
  const center = getBboxCenter(bbox);
  const sessionId = requireEnv("VITE_PICKUP_SESSION_ID");
  const client = getGraphqlClient();

  const fetchPage = (page: number) => limit(() => client
    .request(
      PickupPointsInAreaDocument,
      {
        sessionId,
        first: 1000,
        page,
        filters: {
          boundingBox: {
            southWest: {
              latitude: bbox.south,
              longitude: bbox.west
            },
            northEast: {
              latitude: bbox.north,
              longitude: bbox.east
            },
          },
        },
        sortBy: {
          field: "DISTANCE",
          location: center
        },
      }))
    .then((response) => {
      if (!response?.session) {
        throw new Error("Unfortunately, pickup points are currently unavailable. Please try again later.");
      }
      return response.session.pickupPoint.pickupPoints.points;
    })
    .catch(() => {
      throw new Error("Unfortunately, we were unable to retrieve the pickup points. Please try again later.");
    });

  const firstPage = await fetchPage(1);
  const points = [...firstPage.data];
  const lastPage = firstPage.paginatorInfo.lastPage;

  if (lastPage > 1) {
    const remainingPages = await Promise.all(
      Array.from({ length: lastPage - 1 }, (_, index) => fetchPage(index + 2)),
    );

    for (const page of remainingPages) {
      points.push(...page.data);
    }
  }

  return points;
}

const getBboxCenter = (bbox: Bbox) => {
  return {
    latitude: (bbox.south + bbox.north) / 2,
    longitude: (bbox.west + bbox.east) / 2,
  };
};