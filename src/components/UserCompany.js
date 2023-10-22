
const UserCompany = ({company}) => {

    return (
        <div className="card card-body pie-cards">
            <p className="card-text">
                <span className="text-dark">Nombre: </span>{company.name}
            </p>
            <p className="card-text">
                <span className="text-dark">Eslogan: </span>{company.catchPhrase}
            </p>
            <p className="card-text">
                <span className="text-dark">Giro del Negocio: </span>{company.bs}
            </p>
        </div>
    )
}

export default UserCompany
