import logo from '../img/logo.png'
import Image from 'next/image';

const ApplicationLogo = () => {
    return (
        <Image src={logo} alt="Claudio Alcantara Rivas" width={'40'}/>
    )
}

export default ApplicationLogo