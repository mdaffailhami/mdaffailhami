import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/qna_card.dart';

class MyFAQ extends StatelessWidget {
  const MyFAQ({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('FAQ', style: Theme.of(context).textTheme.headlineLarge),
        const Divider(),
        Container(
          constraints: const BoxConstraints(maxWidth: 1000),
          child: const Wrap(
            alignment: WrapAlignment.center,
            spacing: 20,
            runSpacing: 12,
            children: [
              MyQnACard(
                question: 'How do you learn programming?',
                answer:
                    "I learn it by myself, since I'm a self-learning master :)",
              ),
              MyQnACard(
                question: 'When did you start learning programming?',
                answer: 'I started learning programming on September 12, 2020.',
              ),
              MyQnACard(
                question:
                    "Is it true that you're currently speedrunning data science?",
                answer:
                    "Yes, it is. I just started the journey on July 9, 2024, and the reason is simply because right now I'm interested in it.",
              ),
              MyQnACard(
                question:
                    "How's the progress? Your data science speedrun journey.",
                answer:
                    "Well, it's pretty good. I've learned some math, statistics, data analysis, data visualization, data cleaning, Python, SQL, etc.",
              ),
              MyQnACard(
                question: 'What are your hobbies?',
                answer:
                    "Thinking, pondering, self-learning, programming, cubing, and listening to Qur'an recitations.",
              ),
              MyQnACard(
                question: "How fast can you solve a Rubik's Cube?",
                answer:
                    "My main cube is the X-Man Tornado V3 Pioneer UV, and currently I'm averaging below 15 seconds.",
              ),
            ],
          ),
        ),
      ],
    );
  }
}
