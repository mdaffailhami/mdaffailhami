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
                          style: TextStyle(
                            color: Theme.of(context).colorScheme.secondary,
                          ),
                        ),
                        const TextSpan(
                            text:
                                ",\na passionate programmer from Indonesia.\nAs an INTP, of course I like thinking and pondering all the time.\nI'm a deep thinker, a programmer, and a speedcuber."),
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
