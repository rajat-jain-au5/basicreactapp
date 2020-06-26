import React, { Component } from 'react'
import Posts from '../post.json'
import { Link } from 'react-router-dom'
import '../App.css'
export default class Blog extends Component {
      componentDidMount() {
            this.setState({ newPost: Posts.slice(0, 5) })
      }
      state = {
            count: 0,
            newPost: [],
            prev: 1,
            next: 1, counter: 0
      }
      count = (val) => {
            if (val === 1) {
                  this.setState({ newPost: Posts.slice(0, 5), next: 2 })
            } else if (val === 2) {

                  this.setState({ newPost: Posts.slice(5, 10), prev: 1, next: 3 })
            }
            else if (val === 3) {

                  this.setState({ newPost: Posts.slice(10, 14), prev: 2, next: 1 })
            }
      }

      incrementMe = (index) => {
            // console.log(index)
            let post=this.state.newPost
            let postssss=[]
            post.map(el=>{
            if(el.index===index){
                  el.like=el.like+1
                  postssss=[...postssss,el]
            }else{

                  postssss = [...postssss, el]
            }

      })


            this.setState({
                  newPost:postssss
            })
      }

      render() {
            return (
                  <div className="container-fluid mt-5" >
                        {
                              this.state.newPost.map((post, index) => (
                                    <div className="offset-md-4">
                                          <div className="card shadow" style={{ width: "27rem" }}>
                                                <div class="card-body bg-dark">
                                                      <div className="row" key={index}>
                                                            <div className="col-md-2">
                                                                  <img className="rounded-circle" src={post.profileurl} alt="" width="50" height="50" />
                                                            </div>
                                                            <div className="col-md-8">
                                                                  <h5 className="card-title text-white"><strong>{post.title}</strong>&nbsp;<span className="text-muted">@{post.title}</span>&nbsp;&nbsp;<span className="text-muted">{post.time}</span></h5>
                                                                  <h6 className="card-subtitle mb-2"><a href="#">{post.description}</a></h6>
                                                                  <div><img src={post.postUrl} className="rounded" width="320px" height="200px" /></div>
                                                                  <div className="like mt-2">
                                                                        <i className="fa fa-comment"></i>
                                                                        <i className="fa fa-retweet"></i>
                                                                        <i className="fa fa-heart" onClick={(index) => this.incrementMe(post.index)}>{post.like}</i>

                                                                        <i className="fa fa-download"></i>


                                                                  </div>

                                                            </div>
                                                      </div>


                                                </div>
                                          </div>
                                          <br />

                                    </div>
                              ))
                        }
                        <div className="offset-md-5">
                              <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                          <li class="page-item"><Link class="page-link" to={this.state.prev} onClick={(e) => this.count(this.state.prev)}>Previous</Link></li>
                                          <li class="page-item" ><Link class="page-link" onClick={(e) => this.count(1)} to="1">1</Link></li>
                                          <li class="page-item"><Link class="page-link" onClick={(e) => this.count(2)} to="2">2</Link></li>
                                          <li class="page-item"><Link class="page-link" onClick={(e) => this.count(3)} to="3">3</Link></li>
                                          <li class="page-item"><Link class="page-link" to={this.state.next} onClick={(e) => this.count(this.state.next)}>Next</Link></li>
                                    </ul>
                              </nav>
                        </div>
                  </div>



            )
      }
}
