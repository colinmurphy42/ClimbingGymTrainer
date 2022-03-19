import React from "react";
import AddArea from "../../components/add-area/add-area.component";
import PageTitle from "../../components/page-title/page-title.component";

const AddAreaPage = () => {
    return(
        <div className="add-area-page page">
            <PageTitle title="Add Areas To Your Gym"/>
            <AddArea/>
        </div>
    );
}

export default AddAreaPage