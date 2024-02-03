import React from "react";

const AgencyIDPage = ({ params }: { params: { agencyId: string } }) => {
  return <div>{params.agencyId}</div>;
};

export default AgencyIDPage;
