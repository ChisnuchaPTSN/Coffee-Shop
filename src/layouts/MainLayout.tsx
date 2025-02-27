import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router"

export default function MainLayout() {
    return (
        <>
            <Header />
            <div className="xl:px-20 py-5 justify-center">
                <Outlet />
            </div>

            <Footer />
        </>
    )
}