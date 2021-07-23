import React, { useState, useEffect } from 'react';
import PaginationOutlined from '../components/Pagination';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUser } from '../lib/hooks';
import PropTypes from 'prop-types';
import ta from 'time-ago';


const Home = ({ data, count }) => {
  const router = useRouter();
  const [user, { mutate }] = useUser();
  const [displayData, setDisplayData] = useState(data);
  const [userView, setUserView] = useState('');


  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const filterPostsByUserOrPage = async (username = undefined, page) => {
    // per page count = 8 by default
    try {
      const res = await fetch(`http://localhost:3000/api/get?username=${username}&page=${page}&count=8`);
      const data = await res.json();
      console.log(data);
      setDisplayData(data);
      setUserView(username);
    } catch (err) {
      window.alert('Something went wrong. Please try again.');
    }
  };

  if (data) {
    return (
      <>
        <div>
          <div className="top-level-navigation">
            <div>
              {userView && <u onClick={() => filterPostsByUserOrPage()}>View all posts</u>}
            </div>
            <div className="pagination">
              <PaginationOutlined filterPostsByUserOrPage={filterPostsByUserOrPage} count={count}/>
            </div>
          </div>
          <div className="card-container">
            {displayData.map((value, index) => {
              return (
                <div className="card" key={value._id}>
                  <Image src={value.url} width="450" height="450" className="card-image" alt={value.description}/>
                  <article className="content" >
                    <div className="user" onClick={() => filterPostsByUserOrPage(value.username)}>{value.username}</div>
                    <div>{ta.ago(value.dateCreated)}</div>
                  </article>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }

};

export const getStaticProps = async (context) => {
  const resGet = await fetch('http://localhost:3000/api/get');
  const resCount = await fetch('http://localhost:3000/api/count');

  const data = await resGet.json();
  const count = await resCount.json();

  if (!data) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      }
    };
  }

  return {
    props: { data, count }
  };
};

Home.propTypes = {
  data: PropTypes.array,
};

export default Home;