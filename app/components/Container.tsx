import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function Container({children}) {
    return (
        <div>
            <Header />
            <main id="skip" className="flex flex-col justify-center px-8">
                {children}
                <Footer />
            </main>
        </div>
    )
}