import { Geminifx } from './Geminifx';
import { MacbookScroll } from './ui/macbook-scroll';

function Preface() {
    return (
        <div id="explore" className='scroll-smooth'>
            <MacbookScroll
                src='/assets/src.jpg'
                title={"Welcome to the Hub of Knowledge!"}
                showGradient={false}
                badge={"Big Brain 🧠"}
            />
            <Geminifx />
        </div>
    );
}

export default Preface;