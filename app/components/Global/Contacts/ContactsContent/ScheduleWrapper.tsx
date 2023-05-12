import React from "react";

import "./ContactsContent.css";

const ScheduleWrapper = ({
  data,
  title,
}: {
  data: doctorSchedule[];
  title: string;
}) => {
  return (
    <div className="contacs-schedule-wrapper">
      <p className="contacts-section-subTitle">{title}</p>
      <div className="schedule-wrapper">
        {data?.map((item: doctorSchedule) => (
          <div className="single-schedule" key={item.id}>
            <div className="single-schedule-info">
              <p>{item.cabinet}</p>
            </div>
            <div className="single-schedule-content">
              <p>{item.place}</p>
              <p>{item.street}</p>
              <p>{item.reservation}</p>
              <p className="single-schedule-content-days">
                {item.working_days}
              </p>
              <p>{item.working_hours}</p>
              <p className="single-schedule-content-papers">
                {item?.health_fund}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleWrapper;
