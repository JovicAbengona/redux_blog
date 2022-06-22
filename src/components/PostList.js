import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const posts = this.props.posts.map((post) => {
            return (
                <div key={post.id} className="border rounded m-1 p-3">
                    <div className='row'>
                        <div className='col-1 text-center'>
                            <i className="fa-solid fa-user fs-1 mt-3"></i>
                        </div>
                        <div className='col-8 align-top'>
                            <figure>
                                <blockquote className="blockquote">
                                    <p className='post_title'>{post.title}</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    {post.body}
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            );
        });
        
        return posts;
    };
};
const mapStateToProps = (state) => {
    return { posts: state.posts };
};
export default connect(mapStateToProps, {
    fetchPosts
})(PostList);<br></br>