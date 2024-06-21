

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from "@mui/lab";

const MUITimeline = () => {
  return (
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent color={'text.secondary'}>08:30 am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent color={'text.secondary'}>07:30 am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined" />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
        <TimelineOppositeContent color={'text.secondary'}>06:30 am</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined" />
            </TimelineSeparator>
            <TimelineContent>
                City C
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MUITimeline