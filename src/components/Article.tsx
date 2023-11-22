import React, { useState } from 'react';
import ActionButton from './ActionButton';
import { EDUCATIONAL_TOPICS_DATA } from '../data/educationalTopicsData';

type IEducationalTopics = {
	[key: string]: {
		title: string;
		description: string;
	};
};

const Article = () => {
	const [educationalTopic, setEducationalTopic] = useState<string>('');

	const handleClick = (educationalTopicSelection: string) => {
		setEducationalTopic(educationalTopicSelection);
	};

	return (
		<>
			<header>
				<h3>Problem:</h3>
				<p>
					When we want to change sth. or to make some behaviour on sth. with
					BUTTON, this is one of the solutions. In this certain problem we are
					in the problem where we want to change different descroption and name
					from our educational data.
				</p>
			</header>
			<section className="status_wrapper">
				{/* Here we write same name as we have in our data and by that we will choose which descroption it will show you*/}
				<ActionButton
					name={'mathematics'}
					onClickBehaviour={() => handleClick('mathematics')}
				/>

				<ActionButton
					name={'science'}
					onClickBehaviour={() => handleClick('science')}
				/>

				<ActionButton
					name={'literature'}
					onClickBehaviour={() => handleClick('literature')}
				/>

				<ActionButton
					name={'coding'}
					onClickBehaviour={() => handleClick('coding')}
				/>
			</section>
			<section className="action_wrapper">
				{!educationalTopic ? (
					<p>
						To see description of these perfect educational topics you have to
						click on one of them.
					</p>
				) : (
					<div>
						<h5>
							{
								(EDUCATIONAL_TOPICS_DATA as IEducationalTopics)[
									educationalTopic
								].title
							}
						</h5>
						<p>
							{
								(EDUCATIONAL_TOPICS_DATA as IEducationalTopics)[
									educationalTopic
								].description
							}
						</p>
						<p></p>
					</div>
				)}
			</section>
		</>
	);
};

export default Article;
