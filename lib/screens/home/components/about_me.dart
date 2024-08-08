import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mdaffailhami/widgets/socmed_icon_button.dart';

class MyAboutMe extends StatelessWidget {
  const MyAboutMe({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  static const List<MySocmedIconButton> socmedIconButtons = [
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.github),
      tooltip: 'GitHub',
      url: 'https://github.com/mdaffailhami',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.linkedin),
      tooltip: 'LinkedIn',
      url: 'https://linkedin.com/in/mdaffailhami',
    ),
    MySocmedIconButton(
      icon: FaIcon(FontAwesomeIcons.kaggle),
      tooltip: 'Kaggle',
      url: 'https://kaggle.com/mdaffailhami',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    final highlightTextStyle = TextStyle(
      color: Theme.of(context).colorScheme.secondary,
    );

    return ClipRRect(
      borderRadius: const BorderRadius.only(
        bottomLeft: Radius.circular(10),
        bottomRight: Radius.circular(10),
      ),
      child: Material(
        color: Theme.of(context).colorScheme.surface,
        child: Padding(
          padding: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.width * 0.06,
            vertical: 20,
          ),
          child: Center(
            child: SizedBox(
              width: 420,
              child: Column(
                children: [
                  RichText(
                    text: TextSpan(
                      style: Theme.of(context)
                          .textTheme
                          .titleSmall
                          ?.copyWith(fontSize: 15),
                      children: [
                        const TextSpan(text: "Hello, I'm "),
                        TextSpan(
                          text: "Daffa Ilhami",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: ",\na "),
                        TextSpan(
                          text: "passionate programmer",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: " from "),
                        TextSpan(
                          text: "Indonesia",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: ".\nAs an "),
                        TextSpan(
                          text: "INTP",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(
                          text: " of course I like ",
                        ),
                        TextSpan(
                          text: "thinking",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: " and "),
                        TextSpan(
                          text: "pondering",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: " all the time.\n"),
                        const TextSpan(text: "I'm a "),
                        TextSpan(
                          text: "deep thinker",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: ", a "),
                        TextSpan(
                          text: "programmer",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: ", and a "),
                        TextSpan(
                          text: "speedcuber",
                          style: highlightTextStyle,
                        ),
                        const TextSpan(text: "."),
                      ],
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 22),
                  const Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 50,
                    runSpacing: 15,
                    children: socmedIconButtons,
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
