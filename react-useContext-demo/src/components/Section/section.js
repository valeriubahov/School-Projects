import { LevelContext } from '../../context/LevelContext';
import { useContext } from 'react';

const Section = ({ children }) => {
    const level = useContext(LevelContext);
    return (
        <section className="section">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}

export default Section;
