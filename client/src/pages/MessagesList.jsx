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
class MessagesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMessages().then(messages => {
            this.setState({
                messages: messages.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { messages, isLoading } = this.state

        const columns = [
            {
                Header: 'To Email',
                accessor: 'toEmail',
                filterable: true,
            },
            {
                Header: 'From Email',
                accessor: 'fromEmail',
                filterable: true,
            },
            {
                Header: 'Subject',
                accessor: 'subject',
                filterable: true,
            },
            {
                Header: 'Text',
                accessor: 'text',
                filterable: true,
            },
        ]

        let showTable = true
        if (!messages.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {/* <div>
                    <p>In this page you'll see the list of movies</p>
                </div> */}
                {showTable && (
                    <ReactTable
                        data={messages}
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

export default MessagesList
