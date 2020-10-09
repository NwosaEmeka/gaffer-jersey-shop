import React,{useState} from 'react';
import Banner from '../components/Banner';
import Filter from '../components/Filter/Filter';
import Pagination from '../components/Pagination_component/Pagination';
import Products from '../components/Products_component/Products';
import { useStoreValue } from '../contextApi/StateProvider';
import './mainpage.css';


function MainPage() {
  const [{ products }] = useStoreValue(); //from useContext
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const productsToDisplay = products.slice(firstIndex, lastIndex);

  function changePage(number) {
    setCurrentPage(number)
  }

  return (
    <div>
      <Banner />
      <div className="main__content">
        <Filter />
        <hr/>
        <Products products={productsToDisplay} />
        <Pagination
        size={products.length}
        productsPerPage={productsPerPage}
        changePage = {changePage}
        />
      </div>
      
    </div>
  )
}

export default MainPage
