import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
          <SearchBar />
          <ProductCard />
          <ProductTable />
          <ProductForm />
          <CategoryFilter />
        </main>
      </div>
    </div>
  );
}

export default App;
