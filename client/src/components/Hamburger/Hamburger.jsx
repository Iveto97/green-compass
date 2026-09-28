import './Hamburger.css'

export default function Hamburger ({ isOpen }) {
    return (
        <div className='hamburger'>
            <div className="burger" style={{transform: isOpen ? 'rotate(45deg)' : 'rotate(0)'}}></div>
            <div className="burger" style={{transform: isOpen ? 'translateX(100%)' : 'translateX(0%)', opacity: isOpen ? 0 : 1}}></div>
            <div className="burger" style={{transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}></div>
        </div>
    )
}