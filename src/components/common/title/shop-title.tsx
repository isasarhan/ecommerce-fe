import { Fragment, type FC } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface ShopTitleProps {
  segments: BreadcrumbSegment[];
}

const ShopTitle: FC<ShopTitleProps> = ({ segments }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              {segment.href ? (
                <BreadcrumbLink className='text-lg' href={segment.href}>{segment.label.toUpperCase()}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage className='text-lg'>{segment.label.toUpperCase()}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < segments.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ShopTitle;
