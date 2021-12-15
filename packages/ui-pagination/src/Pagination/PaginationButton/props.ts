/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 - present Instructure, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React from 'react'
import PropTypes from 'prop-types'

import type {
  OtherHTMLAttributes,
  PropValidators
} from '@instructure/shared-types'

type PaginationPageOwnProps = {
  children: React.ReactNode
  current?: boolean
  onClick?: (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.FocusEvent<HTMLInputElement>
  ) => void
}

type PropKeys = keyof PaginationPageOwnProps

type AllowedPropKeys = Readonly<Array<PropKeys>>

type PaginationPageProps = PaginationPageOwnProps &
  OtherHTMLAttributes<PaginationPageOwnProps>

const propTypes: PropValidators<PropKeys> = {
  /**
   * Content to render as page selection
   */
  children: PropTypes.node.isRequired,
  /**
   * Whether the page is currently displayed
   */
  current: PropTypes.bool,
  /**
   * Whether the page is currently displayed
   */
  onClick: PropTypes.func
}

const allowedProps: AllowedPropKeys = [
  'children',
  'current'

  // we don't want to pass onClick
  // 'onClick'
]

export type { PaginationPageProps }
export { propTypes, allowedProps }
