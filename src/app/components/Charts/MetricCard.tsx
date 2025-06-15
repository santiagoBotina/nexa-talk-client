import { ForwardRefExoticComponent, memo, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  trend?: string;
  children?: React.ReactNode;
}

const Component = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  children,
}: Props) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon size={20} className="text-gray-600" />
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        </div>
        {trend && (
          <span className="text-xs text-green-600 font-medium">{trend}</span>
        )}
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
      </div>

      {children}
    </div>
  );
};

const MetricCard = memo(Component);

export { MetricCard };
