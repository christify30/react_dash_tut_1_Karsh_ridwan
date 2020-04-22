import React from 'react';
import {GoDashboard, TiChartBarOutline, FaChartArea, FaWallet, AiOutlineLineChart} from 'react-icons/all';
import Cards from '../Layout/Cards';
import '../assets/css/Dashboard.css';
import TodoItem from '../Layout/TodoItem';
import todosData from '../assets/data/todoData';

function Dashboard(props) {

    const todoItem = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return(
        <div className="MainBody"> 
            <h3 className="subtitle"> <GoDashboard className="subIcon"/> DASHBOARD</h3>
            <div className="view">
                <Cards 
                    className="TotalMoney"
                    subtitle="Total Investment"
                    info="$7,500"
                    icon={<TiChartBarOutline/>}
                />
                <Cards 
                    className="Revenue"
                    subtitle="Total Revenue"
                    info="$12,500"
                    icon={<AiOutlineLineChart/>}
                />
                <Cards 
                    className="Investment"
                    subtitle="Current Investment"
                    info="$3,000"
                    icon={<FaChartArea/>}
                />
                <Cards 
                    className="Balance"
                    subtitle="Total Balance"
                    info="$8,200"
                    icon={<FaWallet/>}
                />
            </div>
            
            <div className="todo-list">
                {todoItem}
            </div>

            <div className="copyright">
                <p>Copyright © 2020 Solab Technologies. All rights reserved.</p>
            </div>
       </div>
    )

}

export default Dashboard;