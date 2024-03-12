import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';
import Sidebar from '../../Components/sidebar/Sidebar';
import '../admin/Admin.css'
import {Route, Routes} from 'react-router-dom'


function Admin(){
    return (
        <div className="admin">
            <Sidebar/>
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>} />
                <Route path='allproducts' element={ <ListProduct/>} />
            </Routes>
        </div>
    )
}

export default Admin;