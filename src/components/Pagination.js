import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pagination extends Component {

      
      render() {
            const {postSize,postPerPage} = this.props
            const pageNumbers = [];

            for (let i = 1; i <= Math.ceil(postSize / postPerPage); i++) {
                  pageNumbers.push(i);
            }
            return (
                  <div>
                        <div className="offset-md-5">
                              <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                          <li class="page-item"><Link class="page-link" to={`${this.props.prev}`} onClick={() => this.props.count(this.props.prev)}>Previous</Link></li>
                                          {
                                                
                                                      pageNumbers.map(num => (
                                                            <li class="page-item" ><Link class="page-link" to={`${num}`} onClick={() => this.props.count(num)} >{num}</Link></li>

                                                      ))
                                                
                                          }
                                          <li class="page-item"><Link class="page-link" to={`${this.props.next}`} onClick={() => this.props.count(this.props.next)}>Next</Link></li>
                                    </ul>
                              </nav>
                        </div>
                  </div>
            )
      }
}


export default Pagination