import JobListings from "@/components/JobListings/JobListings";
import { resolveJobListingsBlock } from "@/cms/normalize/blocks/jobListings";
import type { CmsJobListingsBlock } from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type JobListingsBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  section: CmsJobListingsBlock;
};

export default function JobListingsBlock({
  blockPath,
  dataAttribute,
  section,
}: JobListingsBlockProps) {
  const props = resolveJobListingsBlock(section);

  return (
    <JobListings
      {...props}
      dataAttributes={{
        title: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "title"),
        ),
        intro: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "intro"),
        ),
      }}
      positions={props.positions?.map((position, positionIndex) => {
        const rawItem = section.positions?.find(
          (p) => p._key === position._key,
        );
        const itemPath = getArrayItemPath(
          blockPath,
          "positions",
          rawItem ?? position,
          positionIndex,
        );

        return {
          ...position,
          dataAttributes: {
            title: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "title"),
            ),
            summary: getFieldDataAttribute(
              dataAttribute,
              extendPath(itemPath, "summary"),
            ),
          },
        };
      })}
    />
  );
}
