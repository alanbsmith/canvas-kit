/*

const OptionText = styled.div({
  paddingLeft: `10px`,
});

export const Option = styled.div<FocusProps>(props => ({
  ...type.body,
  alignItems: `center`,
  cursor: `pointer`,
  display: `flex`,
  padding: `7px 14px`,
  backgroundColor: props.isFocused ? colors.blueberry400 : colors.frenchVanilla100,
  color: props.isFocused ? colors.frenchVanilla100 : colors.blackPepper300,
  outline: `none`,
  width: 280,
  wordBreak: 'break-word',
  '&:hover': {
    backgroundColor: props.isFocused ? colors.blueberry400 : colors.soap300,
  },
}));


                  <Option
                    key={option.text}
                    onKeyUp={e => {
                      handleOptionKeyUp(e, option, props.onOptionChange);
                    }}
                    onKeyDown={e => {
                      if (e.key === `Tab` && e.shiftKey) {
                        props.setOpenState(false);
                        props.setActiveOption(dummyOption);
                        e.preventDefault();
                        if (props.buttonElement) {
                          props.buttonElement.focus();
                        }
                      }
                    }}
                    onClick={() => {
                      props.setOpenState(false);
                      props.onOptionChange(option);
                    }}
                    ref={isFocused ? props.activeOptionEl : null}
                    tabIndex={0}
                    isFocused={isFocused}
                    data-testid={`dropdown-option-${option.text}`}
                  >
                    {option.icon && option.color && (
                      <SystemIcon
                        icon={option.icon}
                        color={isFocused ? colors.soap100 : option.color}
                        colorHover={isFocused ? colors.soap100 : option.color}
                      />
                    )}
                    <OptionText>{option.text}</OptionText>
                  </Option>

*/
