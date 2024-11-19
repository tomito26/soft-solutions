import { cn } from "@/lib/utils";
import { HelpCircle, LucideIcon } from "lucide-react";
import React from "react";

interface FormFieldWithIconProps {
  children: React.ReactNode;
  FieldIcon: LucideIcon;
  alignRight?: boolean;
}

// renders a form field with an icon on the left hand side
const FormFieldWithIcon = ({
  children,
  FieldIcon,
  alignRight = false,
}: FormFieldWithIconProps) => {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute  top-auto bottom-auto h-full flex items-center justify-center",
          alignRight ? "right-0 pr-[14px]" : "left-0 pl-[14px]"
        )}
      >
        <FieldIcon
          className={cn(
            FieldIcon === HelpCircle
              ? "stroke-secondary-info"
              : "stroke-body-gray",
            "h-[20px] w-[20px]"
          )}
        />
      </div>
      {children}
    </div>
  );
};

export default FormFieldWithIcon;
