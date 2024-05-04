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
        const Wrap(
          alignment: WrapAlignment.center,
          spacing: 20,
          runSpacing: 12,
          children: [
            MyQnACard(
              question: 'When did you start learning programming?',
              answer:
                  'I started learning programming when I was 16 y/o (September 12, 2020)',
            ),
            MyQnACard(
              question: 'How do you learn programming?',
              answer: "I learn it by myself, since I'm a self-learning master.",
            ),
            MyQnACard(
              question: "How fast can you solve a Rubik's Cube?",
              answer: "Currently, I'm averaging below 15 seconds",
            ),
            MyQnACard(
              question: 'Are you an INTP by any chance?',
              answer: 'Yes, I am',
            ),
            MyQnACard(
              question: 'What are your hobbies?',
              answer:
                  "Thinking, pondering, cubing, programming, learning a new thing by myself, and listening to Qur'an recitation",
            ),
            MyQnACard(
              question: 'Favorit mangas or animes?',
              answer:
                  "Frieren: Beyond Journey's End, Solo Leveling, Oshi no Ko, One Piece, Dr. STONE, & The Agel Next Door Spoils Me Rotten",
            ),
          ],
        ),
      ],
    );
  }
}
