import EventList from "@/components/Events/EventList";
import { resolveEventListBlock } from "@/cms/normalize/blocks/eventList";
import type {
  CmsEventListBlock,
  SanityEventListFields,
} from "@/cms/types/blocks";
import {
  extendPath,
  getArrayItemPath,
  getFieldDataAttribute,
  type CmsDataAttribute,
  type CmsFieldPath,
} from "@/cms/visualEditing";

type EventListBlockProps = {
  blockPath: CmsFieldPath;
  dataAttribute?: CmsDataAttribute;
  fallback?: SanityEventListFields;
  section: CmsEventListBlock;
};

export default function EventListBlock({
  blockPath,
  dataAttribute,
  fallback,
  section,
}: EventListBlockProps) {
  const props = resolveEventListBlock(section, fallback);

  return (
    <EventList
      {...props}
      today={new Date().toISOString().slice(0, 10)}
      dataAttributes={{
        description: getFieldDataAttribute(
          dataAttribute,
          extendPath(blockPath, "description"),
        ),
        title: getFieldDataAttribute(dataAttribute, extendPath(blockPath, "title")),
      }}
      events={props.events?.map((event, eventIndex) => {
        const eventPath = getArrayItemPath(blockPath, "events", event, eventIndex);

        return {
          ...event,
          dataAttributes: {
            dateLabel: getFieldDataAttribute(
              dataAttribute,
              extendPath(eventPath, "dateLabel"),
            ),
            details: getFieldDataAttribute(
              dataAttribute,
              extendPath(eventPath, "details"),
            ),
            linkText: getFieldDataAttribute(
              dataAttribute,
              extendPath(eventPath, "linkText"),
            ),
            registerLabel: getFieldDataAttribute(
              dataAttribute,
              extendPath(eventPath, "registerLabel"),
            ),
            title: getFieldDataAttribute(dataAttribute, extendPath(eventPath, "title")),
          },
        };
      })}
    />
  );
}
