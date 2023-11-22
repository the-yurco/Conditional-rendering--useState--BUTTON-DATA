import React from 'react';

type Props = {
	name: string;
	onClickBehaviour: () => void;
};

const ActionButton = ({ name, onClickBehaviour }: Props) => {
	return <button onClick={onClickBehaviour}>{name}</button>;
};

export default ActionButton;
