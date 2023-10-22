import UserAddressGeo from "./UserAddressGeo"

const UserAddress = ({address}) => {

    return (
        <div className="card card-body pie-cards">
            <p className="card-text">
                <span className="text-dark">Calle: </span>{address.street}
            </p>
            <p className="card-text">
                <span className="text-dark">Suite: </span>{address.suite}
            </p>
            <p className="card-text">
                <span className="text-dark">Ciudad: </span>{address.city}
            </p>
            <p className="card-text">
                <span className="text-dark">Código Postal: </span>{address.zipcode}
            </p>
            <span className="text-dark">
                Coordenadas geográficas:
            </span>
            <UserAddressGeo geo={address.geo}/>
        </div>
    )
}

export default UserAddress
