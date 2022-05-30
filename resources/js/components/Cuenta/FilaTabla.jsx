import React from 'react';
import ReactDOM from 'react-dom';

function FilaTabla() {

    let Usuario = [
        {id: "1", date: "Mayo 2022", company: "Pepsi", pendingDebt: "150000", Debt: "300000"},
        {id: "1", date: "Mayo 2022", company: "Coca-Cola", pendingDebt: "240000", Debt: "290000"},
        {id: "2", date: "Abril 2022", company: "Coca-Cola", pendingDebt: "30000", Debt: "350000"},
        {id: "3", date: "Marzo 2022", company: "Samsung", pendingDebt: "150000", Debt: "320000"},
        {id: "4", date: "Febrero 2022", company: "Apple", pendingDebt: "310000", Debt: "290000"},
        {id: "5", date: "Enero 2022", company: "Pepsi", pendingDebt: "350000", Debt: "300000"},
        {id: "6", date: "Diciembre 2021", company: "Microsoft", pendingDebt: "340000", Debt: "310000"},
        {id: "7", date: "Noviembre 2021", company: "Camioneros", pendingDebt: "420000", Debt: "450000"},
        {id: "8", date: "Octubre 2021", company: "Pepsi", pendingDebt: "150000", Debt: "300000"},
    ]

    return (
        <div className="h-72 overflow-auto scrollbar">
            {Usuario.map((user) =>(
                <div key={user.id} className="grid grid-cols-9 px-4 border-b border-lightwhite p-2">
                    <div className="col-span-2">
                        {user.date}
                    </div>
                    <div className="col-span-3">
                        {user.company}
                    </div>
                    <div className="col-span-3">
                        {user.pendingDebt}
                    </div>
                    <div className="grid place-content-end">
                        {user.Debt}
                    </div>
                </div>
            ))}
            </div>
    );
}

export default FilaTabla;