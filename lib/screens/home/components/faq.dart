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
        Text('FAQ', style: Theme.of(context).textTheme.headline4),
        Divider(),
        Wrap(
          alignment: WrapAlignment.center,
          spacing: 20,
          runSpacing: 10,
          children: [
            MyQnACard(
              question: 'Sejak kapan mulai belajar Programming?',
              answer: '12 September 2020',
            ),
            MyQnACard(
              question: 'Anime favoritnya apa aja?',
              answer: 'One Piece, Mushoku Tensei, & Attack on Titan',
            ),
            MyQnACard(
              question:
                  'Saran dong channel YouTube buat belajar Programming yang mudah dipahami?',
              answer: 'Web Programming UNPAS sama Kelas Terbuka',
            )
          ],
        )
      ],
    );
  }
}
