import 'package:flutter/material.dart';
import 'package:mdaffailhami/widgets/technology_item.dart';

class MyTechnologies extends StatelessWidget {
  const MyTechnologies({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        horizontal: MediaQuery.of(context).size.width * 0.06,
        vertical: 30,
      ),
      child: Column(
        children: [
          Text(
            'Technologies I use',
            style: Theme.of(context).textTheme.headlineLarge,
            textAlign: TextAlign.center,
          ),
          const Divider(),
          Container(
            constraints: const BoxConstraints(maxWidth: 700),
            child: const Wrap(
              alignment: WrapAlignment.center,
              spacing: 20,
              runSpacing: 30,
              children: [
                // MyTechnologyItem(
                //   title: 'NumPy',
                //   image: AssetImage('assets/skill_logos/numpy-logo.png'),
                // ),
                // MyTechnologyItem(
                //   title: 'Polars',
                //   image: AssetImage('assets/skill_logos/polars-logo.png'),
                // ),
                // MyTechnologyItem(
                //   title: 'Vega-Altair',
                //   image: AssetImage('assets/skill_logos/vega-altair-logo.png'),
                // ),
                MyTechnologyItem(
                  title: 'React',
                  image: AssetImage('assets/skill_logos/react-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'Tailwind',
                  image: AssetImage('assets/skill_logos/tailwind-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'Flutter',
                  image: AssetImage('assets/skill_logos/flutter-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'Python',
                  image: AssetImage('assets/skill_logos/python-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'FastAPI',
                  image: AssetImage('assets/skill_logos/fastapi-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'Linux',
                  image: AssetImage('assets/skill_logos/linux-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'Node.js',
                  image: AssetImage('assets/skill_logos/nodejs-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'GitHub',
                  image: AssetImage('assets/skill_logos/github-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'Figma',
                  image: AssetImage('assets/skill_logos/figma-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'PostgreSQL',
                  image: AssetImage('assets/skill_logos/postgresql-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'MongoDB',
                  image: AssetImage('assets/skill_logos/mongodb-logo.png'),
                ),
                MyTechnologyItem(
                  title: 'Firebase',
                  image: AssetImage('assets/skill_logos/firebase-logo.png'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
