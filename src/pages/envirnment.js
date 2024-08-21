import React, { useState, useEffect } from "react";
import { Innerhero } from '../website_components/hero_section';

const Environment = () => {
    const page_Name = "Environment";
    const page_description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
    const hero_bgImage = "/assets/images/zigzag_2.jpg";
    const hero_button_text = "Contact Us";
    const hero_button_URL = "/contact-us";

    const [Data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const postsPerPage = 18;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
                const result = await response.json();
                setData(result);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.error('Error fetching data:', error);
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        };

        fetchData();
    }, []);

    
    const filteredPosts = Data.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <>
            <main>
                <Innerhero 
                    page_img={hero_bgImage} 
                    page_title={page_Name} 
                    page_content={page_description} 
                    page_btnText={hero_button_text} 
                    page_btnURL={hero_button_URL} 
                />

                <div className="dynamic-data-wrapper">
                    <div className="container">
                        <div className="search-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search posts..." 
                                value={searchQuery} 
                                onChange={(e) => setSearchQuery(e.target.value)} 
                                className="search-input"
                            />
                        </div>
                        {loading ? (
                            <div className="loader">
                                <div className="loader-container">
                                    <img src="/assets/images/spine_loader.gif" alt="loader"/>
                                </div>
                            </div>
                        ) : (
                            <>
                                {filteredPosts.length === 0 ? (
                                    <div className="no-posts">
                                        <p>No posts found.</p>
                                    </div>
                                ) : (
                                    <>
                                        <div className="posts-wrapper">
                                            {currentPosts.map((item, index) => (
                                                <div className="post-item-wrapper" key={index}>
                                                    <h6 className="title">
                                                        <span>{item.id} :</span>{item.title}
                                                    </h6>
                                                    <div className="description">
                                                        <p>{item.body}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="page-wrapper">
                                            <div className="pagination">
                                                {[...Array(totalPages)].map((_, i) => (
                                                    <button 
                                                        key={i + 1} 
                                                        onClick={() => paginate(i + 1)} 
                                                        className={currentPage === i + 1 ? 'active' : ''}
                                                    >
                                                        {i + 1}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Environment;
