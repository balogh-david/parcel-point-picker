import { Check } from "lucide-react";
import { Badge, Button } from "@/components";
import { usePickupPointStore } from "../store";
import { formatOpeningHour } from "../utils";
import type { PickupPoint } from "../types";

type PickupPointDetailsProps = {
  point: PickupPoint;
}

export function PickupPointDetails({ point }: PickupPointDetailsProps) {
  const { selectedPickupPointId, setSelectedPickupPoint } = usePickupPointStore();
  const isSelected = selectedPickupPointId === point.id;
  const openingHours = point.openingHours.filter(formatOpeningHour);

  return (
    <div className="flex w-64 flex-col gap-3">
      <div className="space-y-1">
        <h2 className="text-base leading-tight font-semibold">{point.name}</h2>
        {point?.type && <Badge variant="secondary">{point.type}</Badge>}
      </div>

      <p className="text-sm">
        {point.address.postalCode} {point.address.city}, {point.address.addressLine1}
        {point.address.addressLine2 && `, ${point.address.addressLine2}`}
      </p>

      <div className="text-sm">
        {point.isOpenTwentyFourSeven ? (
          <p>Open 24/7</p>
        ) : openingHours.length ? (
          <ul className="space-y-0.5">
            {openingHours.map((hour, index) => (
              <li key={`${hour.day}:${index}`}>
                <span className="capitalize">{hour.day.toLowerCase()}</span>: {formatOpeningHour(hour)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">Opening hours are unavailable.</p>
        )}
      </div>

      <Button
        className="w-full"
        disabled={isSelected}
        onClick={(event) => {
          event.stopPropagation();
          setSelectedPickupPoint(point.id);
        }}>
        {isSelected && <Check className="size-4"/>}
        {isSelected ? "Selected" : "Select"}
      </Button>
    </div>
  );
}
