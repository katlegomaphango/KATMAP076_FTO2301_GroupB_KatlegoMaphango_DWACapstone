import './Loader.css'
import loader from '../../assets/loader.svg'

const Loader = () => {
    return (
        <>
            <div className='loader'>
                <img src={loader} alt="" />
            </div>
        </>
    )
}

export default Loader