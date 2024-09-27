import { Link } from "react-router-dom";

interface IBreadcrumb {
  id: number;
  link?: string;
  name: string;
  isActive: boolean;
}

const BreadCrumb = ({ breadcrumb }: { breadcrumb: IBreadcrumb[] }) => {
  return (
    <div className="flex items-center gap-3">
      {breadcrumb.map((item, idx) => (
        <div key={item.id}>
          <Link
            to={item.link ?? "#"}
            className={`font-readex text-[20px] font-normal hover:text-[#0D2612] ${
              item.isActive ? "text-[#0D2612]" : "text-[#454444] opacity-85"
            }`}
          >
            {idx !== 0 && " /"}
            <span className={`${idx !== 0 ? "pl-3" : ""} inline-block`}>
              {item.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumb;
