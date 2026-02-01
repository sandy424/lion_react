import { Outlet, Link} from "react-router-dom";
import styles from "../style/Layout.module.css";

function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/"><h3 className={styles.logo}>코코몰</h3></Link>
                <div className={styles.menu}>
                    <Link to="/cart">장바구니</Link>
                    <Link to="/mypage">마이페이지</Link>
                </div>            
            </div>
            <Outlet/>
        </div>
    )
}

export default Header;