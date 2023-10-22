import UserAddress from "./UserAddress"
import UserCompany from "./UserCompany"

const UserCard = ({name, username, email, address, phone, website, company}) => {

    return (
        <div className='col-md-6'>
            <div className="card mt-5">
                <div className="card-body pie-cards">
                    <h5 className="card-title">
                        {name}
                    </h5>
                    <span className="text-dark">
                        Username:
                    </span>
                    <p className="card-text">
                        {username}
                    </p>
                    <span className="text-dark">
                        Email:
                    </span>
                    <p className="card-text">
                        {email}
                    </p>
                    <span className="text-dark">
                        Dirección:
                    </span>
                    <UserAddress address={address}/>
                    <span className="text-dark">
                        Teléfono:
                    </span>
                    <p className="card-text">
                        {phone}
                    </p>
                    <span className="text-dark">
                        Sitio web:
                    </span>
                    <p className="card-text">
                        {website}
                    </p>
                    <span className="text-dark">
                        Empresa:
                    </span>
                    <UserCompany company={company}/>
                </div>
            </div>
        </div>
    )
}

export default UserCard
