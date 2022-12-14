import { render } from '@testing-library/react'
import { User } from 'shared/models/User'
import { UserControl } from './UserControl'

describe('UserControl', () => {
  const user: User = {
    _id: 1,
    name: 'Makism',
    email: 'maksim.peg@gmail.com',
    role: 'project',
    created: '234234',
    updated: '234234',
  }
  it('should render', () => {
    const { getByTestId } = render(<UserControl user={user} />)
    expect(getByTestId('UserControl')).toBeInTheDocument()
  })

  it('should render with user name', () => {
    const { getByTestId } = render(<UserControl user={user} />)
    expect(getByTestId('UserControl-UserName')).toHaveTextContent(user.name)
  })
})
