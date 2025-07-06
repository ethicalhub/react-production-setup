import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Feature1Page } from '@features/feature1'

describe('Feature1Page', () => {
    it('render page', () => {
        render(<Feature1Page />)
        expect(screen.getAllByText('Feature1Page')).toHaveLength(1)
    })
})
