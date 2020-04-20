import React, { Component } from 'react';

class CoolButton extends Component {
    propertyNames = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
    }

    createClass() {
        let className = ['button'];
        for (const property in this.propertyNames) {
            if (this.props[property]) { className.push(this.propertyNames[property]); }
        }
        className.push(this.props.className);
        return className.join(' ');
    }    

    render() {
        return (
            <div>
                <button className = {this.createClass()} >
                    {this.props.children}
                </button>
            </div>
        );
    }
}

export default CoolButton;