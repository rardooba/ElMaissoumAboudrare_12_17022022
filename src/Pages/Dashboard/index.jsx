import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUser, getActivity, getPerformance, getAverageSessions } from '../../service';




const Dashboard = () => {

    let {id} = useParams();

    const [dataMocked, setDataMocked] = useState({})

    const [userInfosData, setUserInfosData] = useState({})
    const [userActivityData, setUserActivityData] = useState({})
    const [userAverageSessionsData, setUserAverageSessionsData] = useState({})
    const [userPerformanceData, setUserPerformanceData] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)


    Promise.all([getUser(parseInt(id)), getActivity(parseInt(id)), getAverageSessions(parseInt(id)), getPerformance(parseInt(id))]).then((datas) => {
        setIsLoaded(true)
        setUserInfosData(datas[0])
        setUserActivityData(datas[1])
        setUserAverageSessionsData(datas[2])
        setUserPerformanceData(datas[3])
    })


    return (
        <div>
            <h1>RAR</h1>

        </div>
    );
};

export default Dashboard;