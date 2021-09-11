import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ReviewRoomWrapper } from "./style";

const ReviewRoom = () => <ReviewRoomWrapper> Review <Link to="/">again</Link></ReviewRoomWrapper>

export default ReviewRoom;