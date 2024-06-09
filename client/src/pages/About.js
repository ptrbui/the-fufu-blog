export default function About() {
    return (
        <div className="about-container">
            <h2>About</h2>
            <p className="about">
                I built this blog because I've always loved using Substack to read and write blog posts, but wanted
                something that was truly my own. The tools used in this project were{' '}
                <a className="in-text" href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">JavaScript</a>,{' '}
                <a className="in-text" href="https://react.dev/" target="_blank" rel="noopener noreferrer">ReactJS</a>,{' '}
                <a className="in-text" href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a>, and{' '}
                <a className="in-text" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a>.{' '}
                For more information about my work and links to my other projects, please visit my{' '}
                <a className="in-text" href="https://pbui.io/" target="_blank" rel="noopener noreferrer">website</a>.
            </p>
            <h2>Access Keys</h2>
            <p className="about">
                If you'd like to create an account to post on this blog, please contact me via email at{' '}
                <a className="in-text" href="mailto:peterbui@usc.edu" target="_blank" rel="noopener noreferrer">peterbui@usc.edu</a>{' '}
                for an access key!
            </p>
            <h2>Encryption</h2>
            <p className="about">
                Accounts and passwords created on The Fufu Blog are protected using the bcrypt library.
            </p>
        </div>
    );
}
