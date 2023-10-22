
const UserAddressGeo = ({geo}) => {

    return (
        <div className="card card-body pie-cards">
            <p className="card-text">
                <span className="text-dark">Latitud: </span>{geo.lat}
            </p>
            <p className="card-text">
                <span className="text-dark">Longitud: </span>{geo.lng}
            </p>
        </div>
    )
}

export default UserAddressGeo
