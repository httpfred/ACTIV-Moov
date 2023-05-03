import React from "react";

function Table() {
    return (
        <div>
            <div className="table-container">
                <table>
                    <tr>
                        <th>N°</th>
                        <th>Nature</th>
                        <th>Etat</th>
                        <th>Date</th>
                    </tr>
                    <tr className="rang">
                        <td>1</td>
                        <td>Demande de congés</td>
                        <td><span className="wait">En cours</span></td>
                        <td>20/02/2023</td>
                    </tr>
                    <tr className="rang">
                        <td>2</td>
                        <td>Frais de mission</td>
                        <td><span className="succed">Effectuée</span></td>
                        <td>05/04/2023</td>
                    </tr>
                    <tr className="rang">
                        <td>3</td>
                        <td>Frais de mission</td>
                        <td><span className="closed">Rejetée</span></td>
                        <td>10/12/2021</td>
                    </tr>
                    <tr className="rang">
                        <td>4</td>
                        <td>Frais de mission</td>
                        <td><span className="closed">Rejetée</span></td>
                        <td>10/10/2021</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Table;