import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    );
}

export default App;
