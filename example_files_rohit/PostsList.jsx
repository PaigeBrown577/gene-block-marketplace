import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllPosts().then(posts => {
            this.setState({
                posts: posts.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { posts, isLoading } = this.state

        const columns = [
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Price',
                accessor: 'price',
                filterable: true,
            },
            {
                Header: 'Description',
                accessor: 'description',
                filterable: true,
            },
            {
                Header: 'Meeting Location',
                accessor: 'meeting_location',
                filterable: true,
            },
            {
                Header: 'Tag',
                accessor: 'tag',
                filterable: true,
            },
        ]

        let showTable = true
        if (!posts.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {/* <div>
                    <p>In this page you'll see the list of movies</p>
                </div> */}
                {showTable && (
                    <ReactTable
                        data={posts}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default PostsList
